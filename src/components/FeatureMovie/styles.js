import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: ${({ item }) => `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`};

    .vertical{
        width: inherit;
        height: inherit;
        background: linear-gradient(to top, #111 10%, transparent 90%);
        
        .horizontal{
            width: inherit;
            height: inherit;
            background: linear-gradient(to right, #111 30%, transparent 70%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 30px;
            padding-bottom: 150px;
            padding-top: 70px;

            .name{
                font-size: 60px;
                font-weight: bold;
            }

            .info{
                font-size: 18px;
                font-weight: bold;
                margin-top: 15px;

                .points, 
                .year, 
                .seasons{
                    display: inline-block;
                    margin-right: 15px;
                }

                .points{
                    color: #46d369;
                }
            }

            .description{
                margin-top: 15px;
                font-size: 20px;
                color: #999;
                max-width: 40%;
            }

            .buttons{
                margin-top: 15px;

                .watchButton,
                .myListButton{
                    display: inline-block;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 12px 25px;
                    border-radius: 5px;
                    text-decoration: none;
                    margin-right: 10px;
                    opacity: 1;
                    transition: all ease .3s;
                }
                .watchButton:hover,
                .myListButton:hover{
                    opacity: .7
                }

                .watchButton{
                    background-color: #fff;
                    color: #000;
                }

                .myListButton{
                    background-color: #333;
                    color: #fff;
                }
            }

            .genres{
                margin-top: 15px;
                font-size: 18px;
                color: #999;
            }
        }
    }
    
    @media (max-width: 760px){
        height: 110vh;

        .vertical{
            .horizontal{
                .name{
                    font-size: 30px;
                }

                .info{
                    font-size: 16px;
                }
                
                .description{
                    font-size: 14px;
                    max-width: 100%;
                    margin-right: 30px;
                }

                .buttons{
                    .watchButton,
                    .myListButton{
                        font-size: 16px;
                    }
                }

                .genres{
                    font-size: 14px;
                }
            }
        }
    }
`;
