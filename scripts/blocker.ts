import { execSync } from 'child_process';

const blockEmptyCommits = (): void => {
    try {
        // Fetch the list of currently staged files
        const stagedFiles = execSync('git diff --cached --name-only').toString().trim();

        if (!stagedFiles) {
            console.error('\n🛑 [SYSTEM OVERRIDE: COMMIT REJECTED] 🛑');
            console.error('Wow. An empty commit. Truly groundbreaking work.');
            console.error('Are we trying to artificially inflate our GitHub contribution graph, or did we just forget how `git add` works?');
            console.error('The Handylink repository requires actual, tangible code to function. Please stage some files and try again.');
            console.error('Status: Disappointed, but not surprised.\n');
            
            // Exit with code 1 to abort the git commit process
            process.exit(1);
        }

        console.log('✅ File changes detected. Allowing commit... Please tell me it actually compiles.');
    } catch (error) {
        console.error('🚨 Friday Error: Git inspection failed. Assuming the worst and aborting.', error);
        process.exit(1);
    }
};

blockEmptyCommits();