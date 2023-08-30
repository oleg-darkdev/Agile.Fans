import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/**
 * vite: {
		resolve: {
			alias: {
				// '@coreEntities': path.resolve('./src/lib/core/layout/entities'),
				// '@coreFeatures': path.resolve('./src/lib/core/layout/features'),
				// '@coreProcesses': path.resolve('./src/lib/core/layout/processes'),
				'@coreShared': path.resolve('./src/lib/core/layout/shared'),
				// '@coreWidgets': path.resolve('./src/lib/core/layout/widgets'),
				$retrogenAppWidgets: path.resolve('./src/lib/retrogen/app/widgets/'),
				$retrogenAppEntities: path.resolve('./src/lib/retrogen/app/entities/'),
				$retrogenAppFeatures: path.resolve('./src/lib/retrogen/app/features/'),
				$retrogenAppProcesses: path.resolve('./src/lib/retrogen/app/processes/'),
				$retrogenAppShared: path.resolve('./src/lib/retrogen/app/shared/'),
			}
		}
	}
 */

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			// core
			'@coreEntities': path.resolve('./src/lib/core/layout/entities'),
			'@coreFeatures': path.resolve('./src/lib/core/layout/features'),
			'@coreProcesses': path.resolve('./src/lib/core/layout/processes'),
			'@coreWidgets': path.resolve('./src/lib/core/layout/widgets'),
			// core shared
			'@coreSharedLayout': path.resolve('./src/lib/core/layout/shared'),
			'@coreSharedData': path.resolve('./src/lib/core/data'),
			'@coreSharedUtils': path.resolve('./src/lib/core/utils'),

			// agile.fans
			// agile.fans landing
			'@agileFansLandingEntities': path.resolve('./src/lib/agile-fans/landing/entities'),
			'@agileFansLandingFeatures': path.resolve('./src/lib/agile-fans/landing/features'),
			'@agileFansLandingProcesses': path.resolve('./src/lib/agile-fans/landing/processes'),
			'@agileFansLandingWidgets': path.resolve('./src/lib/agile-fans/landing/widgets'),
			'@agileFansLandingShared': path.resolve('./src/lib/agile-fans/landing/shared'),

			// agile.fans app
			'@agileFansAppEntities': path.resolve('./src/lib/agile-fans/app/entities'),
			'@agileFansAppFeatures': path.resolve('./src/lib/agile-fans/app/features'),
			'@agileFansAppProcesses': path.resolve('./src/lib/agile-fans/app/processes'),
			'@agileFansAppWidgets': path.resolve('./src/lib/agile-fans/app/widgets'),
			'@agileFansAppShared': path.resolve('./src/lib/agile-fans/app/shared'),

			// craz-wip
			'@appCrazyWipLimitsEntities': path.resolve('./src/lib/crazy-wip/app/entities'),
			'@appCrazyWipLimitsFeatures': path.resolve('./src/lib/crazy-wip/app/features'),
			'@appCrazyWipLimitsProcesses': path.resolve('./src/lib/crazy-wip/app/processes'),
			'@appCrazyWipLimitsWidgets': path.resolve('./src/lib/crazy-wip/app/widgets'),

			// retrogen
			'@appRetrogenEntities': path.resolve('./src/lib/retrogen/app/entities'),
			'@appRetrogenFeatures': path.resolve('./src/lib/retrogen/app/features'),
			'@appRetrogenProcesses': path.resolve('./src/lib/retrogen/app/processes'),
			'@appRetrogenWidgets': path.resolve('./src/lib/retrogen/app/widgets'),
			'@appRetrogenShared': path.resolve('./src/lib/retrogen/app/shared'),

			// action-delegation
			'@appActionDelegationEntities': path.resolve('./src/lib/action-delegation/app/entities'),
			'@appActionDelegationFeatures': path.resolve('./src/lib/action-delegation/app/features'),
			'@appActionDelegationProcesses': path.resolve('./src/lib/action-delegation/app/processes'),
			'@appActionDelegationWidgets': path.resolve('./src/lib/action-delegation/app/widgets'),
			'@appActionDelegationShared': path.resolve('./src/lib/action-delegation/app/shared')

			// template
			// '@appEntities': path.resolve('./src/lib/retrogen/app/entities'),
			// '@appFeatures': path.resolve('./src/lib/retrogen/app/features'),
			// '@appProcesses': path.resolve('./src/lib/retrogen/app/processes'),
			// '@appWidgets': path.resolve('./src/lib/retrogen/app/widgets'),
			// 			'@appShared': path.resolve('./src/lib/retrogen/app/shared'),
		}
	}
};

export default config;
