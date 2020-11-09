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

const base_url="http://localhost:4000/api"

export const endpoints={
  popular: base_url+"/discover/movie?sort_by=popularity.desc",
  vote_avg: base_url+"/discover/movie?sort_by=vote_count.desc",
  new: base_url+`/discover/movie?sort_by=primary_release_date.desc&year=${(new Date()).getFullYear()}`,
  genres: base_url+'/genre/movie',
  movie_details: (id)=>{return base_url+'/movie/'+id},
  search: (query)=>{return base_url+'/search/movie?query='+query}
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
    fetchServer(endpoint,callback);
  }
}