export default [
	{
		icon: 'user',
		name: '菜单1'
	},
	{
		icon: 'pie-chart',
		name: '菜单2',
		children: [
			{
				icon: 'user',
				name: '菜单2.1',
				children: [
					{
						name: '菜单2.1.1',
						icon: 'pie-chart'
					}
				]
			},
			{
				icon: 'user',
				name: '菜单2.2'
			},
			{
				icon: 'user',
				name: '菜单2.3'
			}
		]
	},
	{
		icon: 'team',
		name: '菜单3'
	},
	{
		icon: 'user',
		name: '菜单4'
	},
	{
		icon: 'file',
		name: '菜单5'
	}
];
