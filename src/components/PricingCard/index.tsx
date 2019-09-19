import React from 'react'
import Card from 'components/Card'
import { PricingTable, PTProps } from 'components/PricingTable'

export interface PCProps {
	illustration?: React.ReactNode
	button?: React.FunctionComponent
	data: PTProps
}

const PricingCard: React.FunctionComponent<PCProps> = ({
	illustration,
	data,
	button
}) => {
	return (
		<Card>
			{illustration}
			<PricingTable
				features={data.features}
				price={data.price}
				title={data.title}
			/>
			{button}
		</Card>
	)
}

export default PricingCard
