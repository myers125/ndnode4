const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'3f094e96-0a64-40c9-9770-3e0147c18a34'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
