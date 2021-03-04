const {Pool} = require("pg");

async function criarConexao(){
    const pool = new Pool({
        connectionString: 'postgres://dmsjwgqrnnanxj:5a702654074b8995fa01426e12baa14e422d1de5921e8d98c13d48a9ff2de19a@ec2-3-87-180-131.compute-1.amazonaws.com:5432/d3grp06vdfauvf',
        ssl: {
            rejectUnauthorized: false
        }
    })

    let con = await pool.connect();
    /*await con.query("Insert into cliente (nome, rg, metodopagamento) values ($1, $2, $3)", ["Samuel", 1234567, "credito"]);
    await con.query("Insert into cliente (nome, rg, metodopagamento) values ($1, $2, $3)", ["Maysa", 1234568, "debito"]);
    await con.query("Insert into cliente (nome, rg, metodopagamento) values ($1, $2, $3)", ["Marielle", 1234569, "dinheiro"]);
    await con.query("Insert into cliente (nome, rg, metodopagamento) values ($1, $2, $3)", ["Luiza", 1234560, "debito"]);

    await con.query("update cliente set nome = $1 where id = $2", ["Emelly", 2]);

    ### As linhas comentadas acimas já foram executadas ### */

    let res = await con.query("select * from cliente");
    let tuplas = res.rows;
    console.log(tuplas);

    con.release();
}

criarConexao();