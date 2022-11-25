export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bcf3f2504amshef997303be72cc2p1d86aajsn2063d8b70d7d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'bcf3f2504amshef997303be72cc2p1d86aajsn2063d8b70d7d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}