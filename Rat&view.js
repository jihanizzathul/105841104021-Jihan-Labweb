import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const RatingPage = () => {
  const [showWithPhoto, setShowWithPhoto] = useState(false);

  const rating = 4;
  const totalRatings = 19;
  const ratingsBreakdown = {
    5: 0,
    4: 16,
    3: 1,
    2: 1,
    1: 1,
  };

  const allReviews = [
    {
      profileImage: require('./assets/1.png'),
      name: 'User 1',
      date: '2024-08-10',
      rating: 4,
      comment: 'Great product!',
      testimonialImage: null,
    },
    {
      profileImage: require('./assets/2.png'),
      name: 'User 2',
      date: '2024-08-12',
      rating: 4,
      comment: 'Very good, but could be improved.',
      testimonialImage: require('./assets/a2.png'),
    },
   
  ];

  const filteredReviews = showWithPhoto
    ? allReviews.filter((review) => review.testimonialImage)
    : allReviews;

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      let starSource;
      if (i <= count) {
        starSource = require('./assets/Star-full.png'); 
      } else {
        starSource = require('./assets/Star.png'); 
      }
      stars.push(
        <Image
          key={i}
          source={starSource}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rating & Reviews</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
          <View style={styles.totalRatingsContainer}>
            <Text style={styles.totalRatings}>{totalRatings} Ratings</Text>
            <Image
              source={require('./assets/Star-full.png')}
              style={styles.starIcon}
            />
          </View>
        </View>
        <View style={styles.ratingBreakdown}>
          {Object.keys(ratingsBreakdown).map((star) => (
            <View key={star} style={styles.ratingRow}>
              <Text style={styles.starText}>{star}</Text>
              {renderStars(Number(star))}
              <Text style={styles.ratingCount}>{ratingsBreakdown[star]}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={showWithPhoto ? styles.filterButtonInactive : styles.filterButtonActive}
          onPress={() => setShowWithPhoto(false)}
        >
          <Text style={styles.filterText}>All Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={showWithPhoto ? styles.filterButtonActive : styles.filterButtonInactive}
          onPress={() => setShowWithPhoto(true)}
        >
          <Text style={styles.filterText}>With Photo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.reviewsContainer}>
        {filteredReviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Image source={review.profileImage} style={styles.profileImage} />
            <View style={styles.commentContainer}>
              <Text style={styles.name}>{review.name}</Text>
              <Text style={styles.date}>{review.date}</Text>
              <View style={styles.starsContainer}>
                {renderStars(review.rating)}
              </View>
              <Text style={styles.comment}>{review.comment}</Text>
              {review.testimonialImage && (
                <Image
                  source={review.testimonialImage}
                  style={styles.testimonialImage}
                />
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.writeReviewButton}>
        <Text style={styles.writeReviewText}>Write a Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  rating: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  totalRatingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  totalRatings: {
    fontSize: 18,
    color: 'gray',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  ratingBreakdown: {
    justifyContent: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starText: {
    fontSize: 16,
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  ratingCount: {
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButtonActive: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterButtonInactive: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  filterText: {
    color: 'white',
    fontSize: 16,
  },
  reviewsContainer: {
    flex: 1,
  },
  review: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  comment: {
    fontSize: 16,
    marginVertical: 5,
  },
  testimonialImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  writeReviewButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  writeReviewText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RatingPage;
