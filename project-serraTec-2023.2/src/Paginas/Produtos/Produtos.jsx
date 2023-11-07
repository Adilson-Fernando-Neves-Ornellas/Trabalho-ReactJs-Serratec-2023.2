import CardProduto from "../../components/CardProdutos/CardProduto";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import NavBar from "../../components/NavBar/NavBar";
import "./Produtos.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexto/Context";
import Footer from "../../components/Footer/Footer";
// import banner1 from "../../imagens/banner1.webp";
// import banner2 from "../../imagens/banner2.webp";


const Produtos = () => {
  const { listaProduto, setListaProduto } = useContext(AuthContext);

  useEffect(() => {
    getProdutos();
  }, []);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    const produtos = response.data;
    setListaProduto(produtos);
  };

  // const slides = document.querySelectorAll(".slide");
  // let currentSlide = 0;

  // function showSlide(index) {
  //   slides.forEach((slide, i) => {
  //     if (i === index) {
  //       slide.style.display = "block";
  //     } else {
  //       slide.style.display = "none";
  //     }
  //   });
  // }

  // function nextSlide() {
  //   currentSlide = (currentSlide + 1) % slides.length;
  //   showSlide(currentSlide);
  // }

  // function prevSlide() {
  //   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  //   showSlide(currentSlide);
  // }

  // showSlide(currentSlide);

  return (
    <>
      <NavBar />
      {/* <div className="card">
        <div className="slider">
          <img className="slide" src={banner1} alt="Imagem banner" />
          <img className="slide" src={banner2} alt="Imagem banner" />
        </div>
        <div className="controls">
          <button className="prevBtn" onClick={prevSlide}>
            Anterior
          </button>
          <button className="nextBtn" onClick={nextSlide}>
            Próxima
          </button>
        </div>
      </div> */}

      <div className="containerCard">
        {listaProduto.map((produto) => (
          <CardProduto
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            estoque={produto.estoque}
            descricao={produto.descricao}
            imgurl={produto.imgurl}
            like={produto.like}
            disLike={produto.disLike}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Produtos;
