import "./ColecoesDestaque.css";
export default function ColecoesDestaque() {
  return (
    <>
      <div>
        <h3>Coleção em destaque</h3>
        <div className="container_colecao">
          <div className="banner">
            <div>
              <div className="desconto_colecao">30% off</div>
              <h2>Novo drop supreme</h2>
              <div className="botao">
                <h5>Comprar</h5>
              </div>
            </div>
            <div>
              <img
                src="/icones/star-wars-storm-trooper-png-616696 1.png"
                alt=""
                // style="width: 150px;"
                style={{ width: "150px" }}
              />
            </div>
          </div>
          <div className="banner">
            <div>
              <div className="desconto_colecao">30% off</div>
              <h2>Coleção Adidas</h2>
              <div className="botao">
                <h5>Comprar</h5>
              </div>
            </div>
            <div>
              <img src="/icones/ddd 1.png" alt="" style={{ width: "150px" }} />
            </div>
          </div>
          <div className="banner">
            <div>
              <div className="desconto_colecao">30% off</div>
              <h2>Novo Beat Bass</h2>
              <div className="botao">
                <h5>Comprar</h5>
              </div>
            </div>
            <div>
              <img
                src="/icones/d9db11953a2d185d37246bb1f500c957 1.png"
                alt=""
                style={{ width: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container_2">
        <h4>Coleção em destaque</h4>
        <div className="colecao">
          <div className="icon">
            <img src="/icones/tshirt-_1_.png" alt="Imagem 1" />
            <p>Camisetas</p>
          </div>
          <div className="icon">
            <img src="/icones/pants.png" alt="Imagem 2" />
            <p>Calças</p>
          </div>
          <div className="icon">
            <img src="/icones/pants.png" alt="Imagem 3" />
            <p>Bonés</p>
          </div>
          <div className="icon">
            <img src="/icones/Group 53586 (1).png" alt="Imagem 4" />
            <p>Headphones</p>
          </div>
          <div className="icon">
            <img src="/icones/Group 53586 (2).png" alt="Imagem 5" />
            <p>Tênis</p>
          </div>
        </div>
      </div>
    </>
  );
}
