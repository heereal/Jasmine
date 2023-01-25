// 1. 검색어를 입력한다
// 2. 입력받은 검색어로 필터링을 한다


import { data } from '../../bookstore';
import Fuse from 'fuse.js';

export default function Search() {
  const options = {
    includeScore: true,
    // Search in `author` and in `tags` array
    keys: ['FCLTY_NM'],
  };

  const fuse = new Fuse(data, options);

  const result = fuse.search('책방');
  console.log(result);
  
  return <div>1</div>;
}
