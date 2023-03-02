const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'b9458138-0ff9-41b4-99cb-c0153b303df3'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
