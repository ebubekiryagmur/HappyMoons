const knex = require('./knex');
const {SHOW_DELETED} = require('../const');

const Products = {
    getAll: (query_string) => {
        const {category, showDeleted} = query_string;
        const query = knex('products');

        if(showDeleted === SHOW_DELETED.FALSE){

            query.whereNull('deleted_at');

        }else if(showDeleted === SHOW_DELETED.ONLY_DELETED){
 
            query.whereNotNull('deleted_at');

        }else if(showDeleted !== SHOW_DELETED.TRUE){

            query.whereNotNull('deleted_at');

        }

        if(category){

            query.where({category_id: category});

        }

    },
    getById: (id)=> {
        return knex('products').where({id}).first();
    },
    create: (product)=> {
        return knex('products').insert(product).returning('*');
    },
    update: (id, product)=> {
        return knex('products').where({id}).update(product).returning('*');
    },
    delete: (id)=> {
        return knex('products').where({id}).update({deleted_at:new Date()}).returning('*');
    }
}

module.exports = Products;