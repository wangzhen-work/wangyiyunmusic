import { request } from './request'


import type{ BannerRes, 
			 BallRes, 
			 PersonalizedRes, 
			 GoodMusicRes,
			 PlaylistDetailRes,
			 RankingRes,
			 CommentPlaylistRes,
			 SearchsuggestRes,
			 hotSearchLisr,
			 searchList,
			 SongDetailRes,
			 LyricRes,
			 SongUrlRes,
			 HomePage
}from './type.ts'

export const homepageApi = () => {
  return request<HomePage>({
    url: 'https://zyxcl.xyz/music/api/homepage/block/page'
  })
}

// 轮播图
export const bannerApi = () => {
  return request<BannerRes>({
    url: 'https://zyxcl.xyz/music/api/banner'
  })
}

// https://zyxcl.xyz/music/api/homepage/dragon/ball
export const ballApi = () => {
  return request<BallRes>({
    url: 'https://zyxcl.xyz/music/api/homepage/dragon/ball'
  })
}

// playlist/track/all?id=24381616
export const playlistApi = (id: string)=>{
	return request({
		url: `https://zyxcl.xyz/music/api/playlist/track/all`,
		data:{
			id
		}
	})
}



// 歌单评论
export const commentPlaylistApi=(id:string)=>{
	return request<CommentPlaylistRes>({
		url:'https://zyxcl.xyz/music/api/comment/playlist',
		data:{
			id
		}
	})
}
// 推荐歌单
export const personalizedApi = () => {
  return request<PersonalizedRes>({
    url: 'https://zyxcl.xyz/music/api/personalized'
  })
}

// 歌单详情
export const playlistDetailApi = (id: string) => {
  return request<PlaylistDetailRes>({
    url: 'https://zyxcl.xyz/music/api/playlist/detail',
    data: {
      id
    }
  })
}



// 随机歌单
export const goodMusicApi = () => {
	return request<GoodMusicRes>({
		url: `http://121.89.213.194:5001/homepage/block/page`,
	})
}


// /toplist
export const toplistApi = () => {
  return request<RankingRes>({
    url: 'https://zyxcl.xyz/music/api/toplist'
  })
}

// 请求歌曲
// /playlist/track/all?id=24381616&limit=10&offset=1
export const officialListApi = (id: string) => {
	return request({
		url: `https://zyxcl.xyz/music/api//playlist/track/all?id=${id}&limit=3&offset=1`,
	})
}



//热门搜索列表
// https://zyxcl.xyz/music/api//search/hot
export const SearchListApi = ()=>{
	return request<hotSearchLisr>({
		url:"https://zyxcl.xyz/music/api/search/hot/detail"
	})
}

//搜索接口
// https://zyxcl.xyz/music/api/search
export const SearchtApi = (keywords :string)=>{
	return request<searchList>({
		url:"https://zyxcl.xyz/music/api/search",
		data:{
			keywords,
		}
	})
}
//搜索建议接口
// /search/suggest?keywords=海阔天空&type=mobile
export const SearchsuggestApi = (keywords :string,type: string)=>{
	return request<SearchsuggestRes>({
		url:"https://zyxcl.xyz/music/api//search/suggest",
		data:{
			keywords,
			type
		}
	})
}

// 歌曲详情
export const songDetailApi = (ids: string | number) => {
  return request<SongDetailRes>({
    url: 'https://zyxcl.xyz/music/api/song/detail',
    data: {
      ids
    }
  })
}
// 歌词
export const lyricApi = (id: string | number) => {
  return request<LyricRes>({
    url: 'https://zyxcl.xyz/music/api/lyric',
    data: {
      id
    }
  })
}
// 音乐url
export const songUrlApi = (id: string | number) => {
  return request<SongUrlRes>({
    url: 'https://zyxcl.xyz/music/api/song/url',
    data: {
      id
    }
  })
}