export const splitUrl = (url = '') => {
  try {
    const urlObj = new URL(url)
    const origin = urlObj.origin
    // 如果是hash模式
    if (urlObj.hash) {
      const hashPath = urlObj.hash.slice(1)
      // 有查询参数拆分
      if (hashPath.includes('?')) {
        // 拆分查询参数和path
        const pathAnQueryArr = hashPath.split('?')
        const hasPathOnly = pathAnQueryArr[0]
        const query = `?${pathAnQueryArr[1]}`
        return [origin, hasPathOnly, query]
      } else {
        return [origin, hashPath]
      }
    }
    if (urlObj.pathname) {
      if (urlObj.search) {
        return [origin, urlObj.pathname, urlObj.search]
      } else {
        return [origin, urlObj.pathname]
      }
    }
  } catch (error) {
    console.error(`解析菜单url失败,非法的url为：${url}`)
    console.error(error)
    return [window.location.origin, `/unknown${Math.random() * 100}`]
  }
}
