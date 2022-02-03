import Post from '../Post';

const Article = () => {
  //Fazer requisição para uma API para trazer os dados dos poster
  return (
    <section className="container">
      <h1>Article.jx</h1>
      <div className=" mt-5 container-posts ">
        <Post subtitle="tecnologia" title="O gui definitivo sobre o blog" >
        teste1 : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit adipisci eaque, consequatur, eius doloribus iusto laudantium, inventore voluptas repellat quis qui fugit assumenda dolorem. Nulla ea ipsam autem ratione voluptate?
        </Post>
        <Post subtitle="Fotografia" title="Quais as melhores cameras em 2021" >
          teste2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa, aut odio, fugit nulla accusantium iste sequi facere expedita blanditiis aspernatur quae? Suscipit ipsa, qui veritatis natus reprehenderit accusantium distinctio.
        </Post>
        <Post subtitle="Cinema" title="Os dez filmes com maior bilheteria" >
          teste3: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, laboriosam. Perferendis, eligendi alias et obcaecati magnam nostrum veritatis fugiat beatae adipisci omnis esse hic sit ipsum laudantium non reprehenderit id!
        </Post>
      </div>
    </section>
  );
};

export default Article;
