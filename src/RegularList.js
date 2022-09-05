export const RegularList = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{items.map((item, i) => (
				<ItemComponent
					key={i}
					// resolves to `person={item}`
					// spread it to get all of `item`'s fields
					{...{ [resourceName]: item }}
				/>
			))}
		</>
	)
}