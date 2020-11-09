export function fetchServer(endpoint,callback){
  fetch(endpoint)
  .then((response) => {
    if(response.status==200 && response.body!=null) return response.json();
  })
  .then((data) => {
    callback(data);
  })
  .catch(e=>
    console.error(e)
  );
}

export const endpoints={
  popular: "http://localhost:4000/api/discover/movie?sort_by=popularity.desc",
  vote_avg: "http://localhost:4000/api/discover/movie?sort_by=vote_count.desc",
  new: `http://localhost:4000/api/discover/movie?sort_by=primary_release_date.desc&year=${(new Date()).getFullYear()}`,
  genres: 'http://localhost:4000/api/genre/movie',
  movie_details: (id)=>{return 'http://localhost:4000/api/movie/'+id},
  search: (query)=>{return 'http://localhost:4000/api/search/movie?query='+query}
}

function getDocHeight() {
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
}

export function listenerBottom(endpoint,callback) {
  if(window.scrollY+window.innerHeight===getDocHeight()) {
    console.log(endpoint);
    fetchServer(endpoint,callback);
  }
}