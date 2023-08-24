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

			// core shared
			'@coreSharedLayout': path.resolve('./src/lib/core/layout/shared'),
			'@coreSharedData': path.resolve('./src/lib/core/data'),
			'@coreSharedUtils': path.resolve('./src/lib/core/utils')
		}
	}
};

export default config;
