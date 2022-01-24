import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for touchless delivery"
				backgroundImg="model-s.jpg"
				rightButtonText="Existing Inventory"
				leftButtonText="Custom Order"
			/>
			<Section
				title="Model 3"
				description="Order Online for touchless delivery"
				backgroundImg="model-3.jpg"
				rightButtonText="Existing Inventory"
				leftButtonText="Custom Order"
			/>
			<Section
				title="Model X"
				description="Order Online for touchless delivery"
				backgroundImg="model-x.jpg"
				rightButtonText="Existing Inventory"
				leftButtonText="Custom Order"
			/>

			<Section
				title="Model Y"
				description="Order Online for touchless delivery"
				backgroundImg="model-y.jpg"
				rightButtonText="Existing Inventory"
				leftButtonText="Custom Order"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roofs Costs less Than a New Roof"
				backgroundImg="solar-panel.jpg"
				rightButtonText="Existing Inventory"
				leftButtonText="Custom Order"
			/>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftButtonText="Shop Now"
			/>
		</Container>
	);
}

export default Home;
const Container = styled.div`
	height: 100vh;
`;
