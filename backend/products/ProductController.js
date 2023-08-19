const Product =require("./Product")
class ProductController {
  /* ****************************
api for add product
*******************************/
  async addProduct(req, resp) {
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result)
  }

  /* ****************************
api for show products
*******************************/
 async getProducts(req, resp) {
  let products=await Product.find();
  if(products.length>0){
      resp.send(products)
  }else{
      resp.send({result:"no product found"})
  }
  }
 /* ****************************
api for product to update
*******************************/
  async getProductById(req, resp) {
    let result=await Product.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"no product found"})
    }
  }
 /* ****************************
api for delete product
*******************************/
  async deleteProduct(req, resp) {
  
    const result=await Product.deleteOne({_id:req.params.id})
    resp.send(result);
  } 

   /* ****************************
api for update product
*******************************/
  async updateProduct(req, resp) {
    let result=await Product.updateOne(
      {_id:req.params.id},
      {
          $set:req.body
      })
  resp.send(result);
  }

   /* ****************************
api for search products
*******************************/
  async searchProducts(req, resp) {
    let result=await Product.find({
      "$or":[
          {name:{$regex:req.params.key}},
          {price:{$regex:req.params.key}},
          {category:{$regex:req.params.key}},
          {company:{$regex:req.params.key}}
      ]
  })
  resp.send(result)
  }

}

module.exports = new ProductController();
