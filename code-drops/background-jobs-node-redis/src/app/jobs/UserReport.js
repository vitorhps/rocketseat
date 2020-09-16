export default {
  key: 'UserReport',
  options: {
    delay: 5000,
    attemps: 3,
  },
  handle({ data }) {
    const { user } = data;

    console.log(user);
  }
}