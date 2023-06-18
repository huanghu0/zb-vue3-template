export const checkPms = (url,menu,useActiveMenuAction) => {
    const ignoreList = [
      '/error',
      '/401',
      '/404',
      '/page/public/report/preview',
      '/page/public/report/tabluea',
      '/page/report/tabluea'
    ]
    if (ignoreList.includes(url)) {
      return true
    }    
    let temp = []
    menu.forEach((m) => {
      m.children.forEach((v) => {
        if (v.menuUrl === url) {
          temp.push(v)
        }
      })
    })
    if (temp.length === 1) {
      useActiveMenuAction(temp[0])
      return true
    }
    return false
}
  
  
export const checkUrl = (url,module,page) => {
    let urlList = []
    let flag = false
    module.forEach((m) => {
        if (m.moduleUrl && !urlList.includes(m.moduleUrl)) {
        urlList.push(m.moduleUrl)
        }
    })
    page.forEach((p) => {
        if (!urlList.includes(p.pageUrl)) {
        urlList.push(p.pageUrl)
        }
    })   
    if (urlList.includes(url)) {
        flag = true
    }
    return flag     
}

// 获取权限的第一个页面地址
export const getFirstUrl = (moduleObj,menu,useActiveMenuAction) => {
    // 找到模块下面第一个菜单
    let temp = []
    menu.forEach((v) => {
        if (v.moduleId === moduleObj.oid) {
        temp.push(v)
        }
    })
    // 没有菜单，则取moduleUrl
    if (temp.length === 0) {
        useActiveMenuAction({
            ...moduleObj, 
            moduleId: moduleObj.oid
        })     
        return moduleObj.moduleUrl
    }
    // 跳到菜单第一个页面
    useActiveMenuAction(temp?.[0]?.children?.[0] || {})
    return temp?.[0]?.children[0]?.menuUrl || ''
}  