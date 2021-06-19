const apiUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8888'
  : ''

export default apiUrl;
