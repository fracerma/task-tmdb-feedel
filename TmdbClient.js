const inspector = require("schema-inspector");
const buildUrl=require("build-url");
var request = require('request');
const schemas=require("./QuerySchemas");

let me;

let tmdb = function(api_key){
        me=this;
        this.api_key=api_key;
        this.base_url = "http://api.themoviedb.org/3";
        this.api_endpoint={
                search_movie: this.base_url + '/search/movie',
                search_tv: this.base_url + '/search/tv',
                search_person: this.base_url + '/search/person',
                discover_movie: this.base_url+'/discover/movie',
                genre_movie:this.base_url + '/genre/movie/list',
                genre_tv:this.base_url + '/genre/tv/list',
                movie: this.base_url + '/movie',
        }
}

function init(api_key){
        return new tmdb(api_key);
}

tmdb.prototype.movie={
        details: function(id,options,callback){
                if(arguments.length==2){
                        callback=options;
                        options={};
                }
                const endpoint=`${me.api_endpoint.movie}/${id}`;
                const schema= schemas.movie_details;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        }
}

tmdb.prototype.genre={
        movie: function(options,callback){
                if(arguments.length==1){
                        callback=options;
                        options={};
                }
                const endpoint=me.api_endpoint.genre_movie;
                const schema= schemas.genre_list;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        },
        tv: function(options,callback){
                if(arguments.length==1){
                        callback=options;
                        options={};
                }
                const endpoint=me.api_endpoint.genre_tv;
                const schema= schemas.genre_list;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        }
}

tmdb.prototype.search={
        movie: function(options,callback){
                const schema=schemas.search_movie;
                const endpoint=me.api_endpoint.search_movie;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        },
        tv: function(options,callback){
                const schema=schemas.search_tv;
                const endpoint=me.api_endpoint.search_tv;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        },
        person: function(options,callback){
                const schema=schemas.search_person;
                const endpoint=me.api_endpoint.search_person;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        }
}

tmdb.prototype.discover={
        movie: function(options,callback){
                if(arguments.length==1){
                        callback=options;
                        options={};
                }
                const schema=schemas.discover_movie;
                const endpoint=me.api_endpoint.discover_movie;
                if(schemaValidation(schema,callback,options))
                        queryPerform(options,endpoint,callback);
        }
}

function schemaValidation(schema,callback,options){
        inspector.sanitize(schema, options);
        const res=inspector.validate(schema,options);
        if(!res.valid){
                callback(res.format(),undefined);
                return false;
        }
        return true;
}

function queryPerform(options,endpoint,callback) {
        // Adding required params
        options.api_key=me.api_key;
        // Build Url
        const url=buildUrl(endpoint,{queryParams:options});
        // Perform the Query
	request({
                        uri: url, 
                        headers:{ "Accept": 'application/json'}
		}
		, (error, response, body) =>{
                        let res = null;
                        try {
                                res = JSON.parse(body);
                        } catch (e) {}
                        // All good
                        if (!error && response.statusCode === 200 && !res.status_code) {
                                callback(undefined, res);
                                return;
                        }
                        if (res&&res.status_code) {
                                switch (res.status_code) {
                                        case 6: // Invalid id
                                                callback(res, undefined);
                                                break;
                                        case 7: //Invalid API key
                                                callback(res, undefined);
                                                break;
                                        case 10: //API key suspended
                                                callback(res, undefined);
                                                break;
                                        case 12: //The item/record was updated successfully
                                                callback(res, undefined);
                                                break;
                                        case 17: //Session denied
                                                callback(res, undefined);
                                                break;
                                        case 34: //Resourced not founded
                                                callback(res,undefined);
                                                break;
                                }
                        } else {
                                callback(error, res);
                        }
		}
	);
}


module.exports.init=init;