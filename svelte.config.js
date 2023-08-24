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
			'@coreEntities': path.resolve('./src/lib/core/layout/entities'),
			'@coreFeatures': path.resolve('./src/lib/core/layout/features'),
			'@coreProcesses': path.resolve('./src/lib/core/layout/processes'),
			'@coreWidgets': path.resolve('./src/lib/core/layout/widgets'),

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

			// template
			// '@appEntities': path.resolve('./src/lib/retrogen/app/entities'),
			// '@appFeatures': path.resolve('./src/lib/retrogen/app/features'),
			// '@appProcesses': path.resolve('./src/lib/retrogen/app/processes'),
			// '@appWidgets': path.resolve('./src/lib/retrogen/app/widgets'),
			// 			'@appRetrogenShared': path.resolve('./src/lib/retrogen/app/shared'),

			// core shared
			'@coreSharedLayout': path.resolve('./src/lib/core/layout/shared'),
			'@coreSharedData': path.resolve('./src/lib/core/data'),
			'@coreSharedUtils': path.resolve('./src/lib/core/utils')
		}
	}
};

export default config;
