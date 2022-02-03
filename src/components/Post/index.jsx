const Post = () => {
  return (
    <div className=" mx-2">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitivo do blog</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi
        quaerat velit ut assumenda. Corrupti dolores, harum voluptates quos
        perspiciatis mollitia, neque quo atque vitae quasi cum fugit nostrum
        assumenda!Corrupti dolores, harum voluptates quos perspiciatis mollitia,
        neque quo atque vitae quasi cum fugit nostrum assumenda!
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2 mt-2">
          <h6 className="color-blue">Fulano de Tal</h6>
          <p>Aug 2, 2020- 8 min read</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
