import React, { useState } from 'react';
import Icon from './Components/Icon'

//Importing react toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Importing ReactStrap
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

const tictacArray = new Array(9).fill("");
const App = () => {
	let [isCross, setIsCross] = useState(true);
	let [winMessage, setWinMessage] = useState("");

	const playAgain = () => {
		setIsCross(true);
		setWinMessage("");
		tictacArray.fill("");
	}

	const findWinner = () => {
		// Rows Conditions
		if (tictacArray[0] && tictacArray[0] == tictacArray[1] && tictacArray[0] == tictacArray[2]) {
			setWinMessage(tictacArray[0] + " Wins!!!")
		}
		else
			if (tictacArray[3] && tictacArray[3] == tictacArray[4] && tictacArray[3] == tictacArray[5]) {
				setWinMessage(tictacArray[3] + " Wins!!!")
			}
			else
				if (tictacArray[6] && tictacArray[6] == tictacArray[7] && tictacArray[6] == tictacArray[8]) {
					setWinMessage(tictacArray[6] + " Wins!!!")
				}
				else
					//Column Conditions
					if (tictacArray[0] && tictacArray[0] == tictacArray[3] && tictacArray[0] == tictacArray[6]) {
						setWinMessage(tictacArray[0] + " Wins!!!")
					}
					else
						if (tictacArray[1] && tictacArray[1] == tictacArray[4] && tictacArray[1] == tictacArray[7]) {
							setWinMessage(tictacArray[1] + " Wins!!!")
						}
						else
							if (tictacArray[2] && tictacArray[2] == tictacArray[5] && tictacArray[2] == tictacArray[8]) {
								setWinMessage(tictacArray[2] + " Wins!!!")
							}
							else
								//Diagnol Conditions
								if (tictacArray[0] && tictacArray[0] == tictacArray[4] && tictacArray[0] == tictacArray[8]) {
									setWinMessage(tictacArray[0] + " Wins!!!")
								}
								else
									if (tictacArray[2] && tictacArray[2] == tictacArray[4] && tictacArray[2] == tictacArray[6]) {
										setWinMessage(tictacArray[2] + " Wins!!!")
									}
									else if (tictacArray[0] && tictacArray[1] && tictacArray[2] && tictacArray[3] && tictacArray[4] && tictacArray[5] && tictacArray[6] && tictacArray[7] && tictacArray[8]) {
										setWinMessage("Match Draws!!!")
									}
	}

	const changeItem = (index) => {
		if (winMessage) {
			return toast("Game Over", { type: "dark" });
		}
		if (tictacArray[index] == "") {
			tictacArray[index] = isCross ? "cross" : "circle";
			setIsCross(!isCross);
		}
		else {
			return toast("Open your eyes dude where are you tapping xD", { type: "error" });
		}
		findWinner()
	}

	return (
		<div >
			<h1>Tic Tac Toe</h1>
			<Container className="p-3">
				<ToastContainer position="bottom-center"></ToastContainer>

				<Row>
					<Col md={6} className="offset-md-3">

						{
							// to display winner message
							winMessage ? (
								<div>
									{/* {toast(winMessage, { type: "success" })} */}
									{toast(winMessage.charAt(0).toUpperCase() + winMessage.slice(1), { type: "success" })}

									<div className="text-center">
										<Button className="button mb-3 btn-dark" onClick={playAgain}> Play Again? </Button>
									</div>
								</div>
							) : (
								<h2>
									{isCross ? "Cross's Turn" : "Circle's Turn"}
								</h2>
							)
						}

						<div className="grid">
							{tictacArray.map((value, index) => (
								<Card onClick={() => changeItem(index)} >

									<CardBody className="box">
										<Icon choice={tictacArray[index]} />
									</CardBody>

								</Card>
							))}
						</div>

					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
