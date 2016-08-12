'use strict'

const GetDependencies = (list, dependenciesList) => {

  dependenciesList = dependenciesList || []

  let dependencies = list && list.dependencies || []

  Object.keys(dependencies).reverse().forEach((dependency) => {

    GetDependencies(dependencies[dependency], dependenciesList)

    let name = dependency + '@' + dependencies[dependency].version
    if ( dependenciesList.indexOf(name) === -1 ) dependenciesList.push(name)
  })

  return dependenciesList.sort()
}

module.exports =  GetDependencies
