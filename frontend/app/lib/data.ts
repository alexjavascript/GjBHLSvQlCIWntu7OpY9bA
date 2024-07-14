export const fetchGetEvents = async () => {
  try {
    const data = await fetch('localhost:1234/api/events')
    
    return data
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch events');
  }
}

export const fetchPostEvent = async () => {
  try {
    const data = await fetch('localhost:1234/api/events')
    
    return data
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch events');
  }
}