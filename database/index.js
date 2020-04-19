const ObjectID = require('koa-mongo').ObjectID;

exports.getGoods = async (db) => {
  return await db.collection('goods').find().toArray()
}
exports.getSeller = async (db) => {
  return await db.collection('goods').find().toArray()
}

exports.modifyGoods = async (db, data) => {
  const updatedData = []
  const deletedData = []
  data.update.map(({id, name, price, store, date}) => {
    const item = {id}
    item[`foods.$.name`] = name
    item[`foods.$.price`] = price
    item[`foods.$.store`] = store
    item[`foods.$.date`] = date
    updatedData.push(item)
  })
  data.delete.map(({id}) => {
    deletedData.push({id})
  })
  const res1 = await update(db, updatedData)
  const res2 = await del (db, deletedData)
  console.log(res1, res2);
}

async function update(db, updateArr) {
  // promise arr
  const updatedPromiseArr = updateArr.map((item) => {
    return new Promise(async (resolve) => {
      const res = await db.collection('goods').updateOne(
          { "foods.id": ObjectID(item.id) },
          { $set: item }
      )
      resolve(res)
    })
  })
  try {
    const res = await Promise.all(updatedPromiseArr)
    return res
  } catch (e) {
    return e
  }
}

async function del (db, deletedArr)
{
  const deletedPromiseArr = deletedArr.map((item) => {
    return new Promise(async (resolve) => {
      const res = await db.collection('goods').remove(
          { "foods.id": ObjectID(item.id) },
          { justOne: true }
      )
      resolve(res)
    })
  })
  try {
    const res = await Promise.all(deletedPromiseArr)
    return res
  } catch (e) {
    return e
  }
}
