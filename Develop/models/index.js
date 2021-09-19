// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category- category can have multipl eproducts, but a product can only belong to one category 
Product.belongsTo(Category, {
  foreignKey: 'category_id'
})
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'product_id'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagged_product',
  foreignKey: 'tag_id'
})

//Make sure you set up foreign key relationships that match the column we created in the respective models.

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
})

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
})

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
})

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
