import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Buffer "mo:base/Buffer";
import Error "mo:base/Error";
import Array "mo:base/Array";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

actor ReviewSystem {

  // ====== TYPES ======
  /// Represents a product review with metadata
  type Review = {
    reviewText: Text;
    rating: Nat;
    timestamp: Int;
    productId: Text;
    reviewer: Principal;
  };

  // ========= STATE =========

  // Admin principal (optional — can hardcode or set during init)
  let admin : Principal = Principal.fromText("aaaaa-aa"); // replace with your Principal if needed

  // Stable storage for upgrade persistence
  private stable var reviewEntries : [(Text, [Review])] = [];

  // In-memory hashmap for fast access
  private var reviewsMap = HashMap.HashMap<Text, Buffer.Buffer<Review>>(10, Text.equal, Text.hash);

  // ========= SYSTEM FUNCTIONS ==========

  system func preupgrade() {
    reviewEntries := Array.map<(Text, Buffer.Buffer<Review>), (Text, [Review])>(
      Iter.toArray(reviewsMap.entries()),
      func((k, v)) : (Text, [Review]) = (k, Buffer.toArray(v))
    );
  };

  system func postupgrade() {
    for ((productId, reviews) in reviewEntries.vals()) {
      let buffer = Buffer.Buffer<Review>(reviews.size());
      for (review in reviews.vals()) {
        buffer.add(review);
      };
      reviewsMap.put(productId, buffer);
    };
  };

  // ========= AUTH HELPERS ==========

  /// Returns the caller's principal
  public query (msg) func whoami() : async Principal {
    msg.caller;
  };

  /// Ensures caller is admin (you can use this in gated functions)
  private func isAdmin(caller: Principal) : Bool {
    caller == admin;
  };

  // ========= REVIEW FUNCTIONS ==========

  /// Submit a new review
  public shared(msg) func addReview(productId: Text, reviewText: Text, rating: Nat) : async Result.Result<Text, Text> {
    try {
      if (rating < 1 or rating > 5) {
        return #err("Rating must be between 1 and 5");
      };
      if (Text.size(reviewText) == 0) {
        return #err("Review text cannot be empty");
      };

      let newReview : Review = {
        reviewText = reviewText;
        rating = rating;
        timestamp = Time.now();
        productId = productId;
        reviewer = msg.caller;
      };

      let reviewBuffer = switch (reviewsMap.get(productId)) {
        case null {
          let buf = Buffer.Buffer<Review>(1);
          reviewsMap.put(productId, buf);
          buf;
        };
        case (?existing) existing;
      };

      reviewBuffer.add(newReview);
      #ok("Review submitted successfully")
    } catch (e) {
      #err("Internal error: " # Error.message(e))
    }
  };

  /// Get all reviews for a product
  public query func getReviews(productId: Text) : async [Review] {
    switch (reviewsMap.get(productId)) {
      case null [];
      case (?buffer) Buffer.toArray(buffer);
    }
  };

  /// Get total number of reviews (admin only — optional restriction)
  public query (msg) func getReviewCount() : async Result.Result<Nat, Text> {
    if (not isAdmin(msg.caller)) {
      return #err("Unauthorized: Only admin can view total count");
    };
    var count = 0;
    for (buffer in reviewsMap.vals()) {
      count += buffer.size();
    };
    #ok(count)
  };

  /// Get all reviews (admin only — optional restriction)
  public query (msg) func getAllReviews() : async Result.Result<[Review], Text> {
    if (not isAdmin(msg.caller)) {
      return #err("Unauthorized: Only admin can view all reviews");
    };
    let allReviews = Buffer.Buffer<Review>(100);
    for (buffer in reviewsMap.vals()) {
      for (review in buffer.vals()) {
        allReviews.add(review);
      };
    };
    #ok(Buffer.toArray(allReviews))
  };
};