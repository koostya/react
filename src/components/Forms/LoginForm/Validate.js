const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const Validate = (values) => {
  return sleep(1000)
    .then(() => {
      if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.nickname)) {
        throw { nickname: 'That username is taken' }
      }
    })
}