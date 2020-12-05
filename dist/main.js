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
    await app.listen(+(process.env.PORT) || 80);
}
bootstrap();
//# sourceMappingURL=main.js.map