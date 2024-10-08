"use strict";
const api_request = require("./request.js");
const homepageApi = () => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/homepage/block/page"
  });
};
const ballApi = () => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/homepage/dragon/ball"
  });
};
const commentPlaylistApi = (id) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/comment/playlist",
    data: {
      id
    }
  });
};
const playlistDetailApi = (id) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/playlist/detail",
    data: {
      id
    }
  });
};
const toplistApi = () => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/toplist"
  });
};
const officialListApi = (id) => {
  return api_request.request({
    url: `https://zyxcl.xyz/music/api//playlist/track/all?id=${id}&limit=3&offset=1`
  });
};
const SearchListApi = () => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/search/hot/detail"
  });
};
const SearchtApi = (keywords) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/search",
    data: {
      keywords
    }
  });
};
const SearchsuggestApi = (keywords, type) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api//search/suggest",
    data: {
      keywords,
      type
    }
  });
};
const songDetailApi = (ids) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/song/detail",
    data: {
      ids
    }
  });
};
const lyricApi = (id) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/lyric",
    data: {
      id
    }
  });
};
const songUrlApi = (id) => {
  return api_request.request({
    url: "https://zyxcl.xyz/music/api/song/url",
    data: {
      id
    }
  });
};
exports.SearchListApi = SearchListApi;
exports.SearchsuggestApi = SearchsuggestApi;
exports.SearchtApi = SearchtApi;
exports.ballApi = ballApi;
exports.commentPlaylistApi = commentPlaylistApi;
exports.homepageApi = homepageApi;
exports.lyricApi = lyricApi;
exports.officialListApi = officialListApi;
exports.playlistDetailApi = playlistDetailApi;
exports.songDetailApi = songDetailApi;
exports.songUrlApi = songUrlApi;
exports.toplistApi = toplistApi;
