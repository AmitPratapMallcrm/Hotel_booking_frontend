export default {
  hotelid(state) {
    return state.hotelid;
  },
  hasHotels(state) {
    return state.hotels && state.hotels.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const hotels = getters.hotels;
    const userId = rootGetters.userId;
    return hotels.some(hotel => hotel.id === userId);
  }
};