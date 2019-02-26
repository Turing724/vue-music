import { commonParams } from './config';
import axios from 'axios';
import { platform } from 'os';

export const getLyric = mid => {
  const url = `http://localhost:8083/api/lyric`;
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076,
    format: 'json'
  });
  return axios
    .get(url, {
      params: data
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
};
