import card from './card';

const idMember = '63123de171545000ae4ef6c2';
const shortLinkBoard = 'FPMiMMwH';

const avatarUrl =
	'https://trello-members.s3.amazonaws.com/idMember/00140b36ac1bdb19d53e431cbe89ba57';

const board = {
	id: '636d4c673005570579feebb6',
	// ari:cloud:trello::board/workspace/63123de3fc485300992e1b9d/636d4c673005570579feebb6
	nodeId: '',
	name: 'Kanbanel',
	desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
	closed: false,
	dateClosed: null,
	idOrganization: '63123de3fc485300992e1b9d',
	pinned: false,
	// https://trello.com/b/{shortLinkBoard}/contacts
	// https://trello.com/b/{shortLink}/{boardName}
	url: '',
	shortLink: shortLinkBoard,
	// https://trello.com/b/{shortLink}
	shortUrl: 'https://trello.com/b/{shortLinkBoard}',

	prefs: {
		permissionLevel: 'private',
		hideVotes: false,
		voting: 'disabled',
		invitations: 'members',
		selfJoin: false,
		canBePublic: true,
		canBeEnterprise: true,
		canBeOrg: true,
		canBePrivate: true,
		canInvite: true
	},
	labelNames: {
		extreme: ''
	},
	dateLastActivity: '2022-12-05T22:06:20.457Z',
	dateLastView: '2023-06-18T08:07:19.637Z',
	idMemberCreator: idMember,
	actions: [
		{
			idMemberCreator: idMember,
			type: 'updateCard',
			date: '2022-11-10T19:09:27.532Z'
		}
	],
	cards: [card],
	sections: [
		{
			closed: false,
			title: 'Lorem ipsum is placeholder text commonly used in the graphic, print.',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
			columns: [
				{
					name: 'In process',
					closed: false,
					softLimit: null,
					status: null,
					wipLimit: 6
				},
				{
					name: 'Done',
					closed: false,
					softLimit: null,
					status: null,
					wipLimit: 6
				}
			]
		}
	],
	members: [
		{
			id: idMember,
			avatarUrl: 'https://source.unsplash.com/100x100/?portrait?1', //avatarUrl
			email: 'loremimpsum@gmail.com',
			bio: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			confirmed: true,
			fullName: 'oleg medvedev',
			idMemberReferrer: null,
			initials: 'OM',
			memberType: 'guest', // admin
			status: 'disconnected', // connected
			nickname: 'olegmedvedev23',
			unconfirmed: false,
			deactivated: false
		}
	]
};

export default board;
