module.exports={
        //https://developers.themoviedb.org/3/movies/get-movie-details
        movie_details:{
            type:"object",
            properties:{
                append_to_response:{
                    type:"string",
                    pattern: /([\w]+)/,
                    optional:true
                },
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
            }
        },
        genre_list:{
            type: "object",
            properties:{
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
            }
        },
        //https://developers.themoviedb.org/3/search/search-movies
        search_movie: {
            type: 'object',
            properties:{
                query:{
                    type:"string",
                    minLength: 1
                },
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
                region:{
                    type: 'string',
                    pattern: / ^[A-Z]{2}$/,
                    optional: true  
                },
                page:{
                    type: 'number',
                    lte: 1000,
                    gte: 1,
                    optional: true
                },
                year:{
                    type: 'number',
                    optional: true
                },
                primary_release_year:{
                    type: 'number',
                    optional: true
                },
                include_adult:{
                    type: 'boolean',
                    optional: true
                }       
            }
        },
        //https://developers.themoviedb.org/3/search/search-tv-shows
        search_tv:{
            type: 'object',
            properties:{
                query:{
                    type:"string",
                    minLength: 1
                },
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
                page:{
                    type: 'number',
                    lte: 1000,
                    gte: 1,
                    optional: true
                },
                first_air_date_year:{
                    type: 'number',
                    optional: true
                },
                include_adult:{
                    type: 'boolean',
                    optional: true
                }       
            }
        },
        //https://developers.themoviedb.org/3/search/search-people
        search_person:{
            query:{
                type:"string",
                minLength: 1
            },
            type: 'object',
            properties:{
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
                region:{
                    type: 'string',
                    pattern: / ^[A-Z]{2}$/,
                    optional: true  
                },
                page:{
                    type: 'number',
                    lte: 1000,
                    gte: 1,
                    optional: true
                },
                include_adult:{
                    type: 'boolean',
                    optional: true
                }       
            }
        },
        //https://developers.themoviedb.org/3/discover/movie-discover
        discover_movie:{
            type: 'object',
            properties:{
                language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                },
                region:{
                    type: 'string',
                    pattern: / ^[A-Z]{2}$/,
                    optional: true  
                },
                page:{
                    type: 'number',
                    lte: 1000,
                    gte: 1,
                    optional: true
                },
                year:{
                    type: 'number',
                    optional: true
                },
                primary_release_year:{
                    type: 'number',
                    optional: true
                },
                include_adult:{
                    type: 'boolean',
                    optional: true
                },
                sort_by:{
                    type:'string',
                    pattern:/popularity.asc|popularity.desc|release_date.asc|release_date.desc|revenue.asc|revenue.desc|primary_release_date.asc|primary_release_date.desc|original_title.asc|original_title.desc|vote_average.asc|vote_average.desc|vote_count.asc|vote_count.desc/,
                    optional:true  
                },
                include_video:{
                    type: 'boolean',
                    optional: true
                },
                primary_release_date:{
                    type:"object",
                    someKeys:["gte","lte"],
                    properties:{
                        gte:{
                            type: 'string',
                            pattern: "date",
                            optional: true
                        },
                        lte:{
                            type: 'string',
                            pattern: "date",
                            optional: true
                        }
                    },
                    optional:true
                },
                release_date:{
                    type:"object",
                    someKeys:["gte","lte"],
                    properties:{
                        gte:{
                            type: 'string',
                            pattern: "date",
                            optional: true
                        },
                        lte:{
                            type: 'string',
                            pattern: "date",
                            optional: true
                        }
                    },
                    optional:true
                },
                year:{
                    type:'number',
                    optional:true,
                    gte: 0
                },
                vote_count:{
                    type:"object",
                    someKeys:["gte","lte"],
                    properties:{
                        gte:{
                            type: 'number',
                            gte: 0,
                            optional: true
                        },
                        lte:{
                            type: 'number',
                            gte:1,
                            optional: true
                        }
                    },
                    optional:true
                },
                vote_average:{
                    type:"object",
                    someKeys:["gte","lte"],
                    properties:{
                        gte:{
                            type: 'number',
                            gte: 0,
                            optional: true
                        },
                        lte:{
                            type: 'number',
                            gte:0,
                            optional: true
                        }
                    },
                    optional:true
                },
                with_cast:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_crew:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_people:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_companies:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_genres:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                without_genres:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_keywords:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                without_keywords:{
                    type: 'string',
                    pattern:/\d+(,\s*\d+)*/,
                    optional: true
                },
                with_runtime:{
                    type:"object",
                    someKeys:["gte","lte"],
                    properties:{
                        gte:{
                            type: 'number',
                            gte: 0,
                            optional: true
                        },
                        lte:{
                            type: 'number',
                            gte:0,
                            optional: true
                        }
                    },
                    optional:true
                },
                with_original_language:{
                    type: 'string',
                    pattern: /[a-z]{2}-[A-Z]{2}/,
                    optional: true  
                } 
            }
        }
}