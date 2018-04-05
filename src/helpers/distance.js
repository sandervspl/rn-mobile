export const deg2rad = deg => deg * (Math.PI / 180);

export const getDistanceFromLatLonInM = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    (Math.sin(dLat / 2) * Math.sin(dLat / 2)) +
    (Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2));
  const cc = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * cc; // Distance in km

  return Math.floor(d * 1000); // return distance in m
};
