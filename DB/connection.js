import Sequelize from 'sequelize';

export const sequelize = new Sequelize('freedb_blogProject', 'freedb_rama5', '2$9ZEEHbgM#yAHV', {
    host: 'sql.freedb.tech',    
    port:3306,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });

    export const connectDB = async()=>{
        try{
            return await sequelize.sync({alter:false , force : false});
        }catch(err){
            console.log(`error is: ${err.message}`);
        }
    }
    
