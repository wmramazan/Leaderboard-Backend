"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const document_builder_1 = require("@nestjs/swagger/dist/document-builder");
const swagger_module_1 = require("@nestjs/swagger/dist/swagger-module");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    const options = new document_builder_1.DocumentBuilder()
        .setTitle('Leaderboard Backend API')
        .setDescription('A simple leaderboard for games.')
        .setVersion('1.0')
        .addTag('leaderboard', 'game')
        .build();
    const document = swagger_module_1.SwaggerModule.createDocument(app, options);
    swagger_module_1.SwaggerModule.setup('api', app, document);
    const PORT = process.env.PORT || 3000;
    await app.listen(+PORT, '0.0.0.0', () => {
        console.log(`The app is running on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map