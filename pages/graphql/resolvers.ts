export const resolvers = {
	Query: {
		users: (
			_parent: any,
			_args: any,
			ctx: { prisma: { user: { findMany: () => any } } }
		) => {
			return ctx.prisma.user.findMany();
		},
	},
};
