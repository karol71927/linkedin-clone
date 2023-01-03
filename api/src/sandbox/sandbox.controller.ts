import { Body, Controller, Get, Query } from '@nestjs/common';
import { DifferentNameThanFile } from './sandbox.service';

@Controller('sandbox')
export class SandboxController {
  constructor(private readonly sandboxService: DifferentNameThanFile) {}

  @Get('')
  async func1(
    @Query('q1') q1: string = 'abc',
    @Query('q2') q2: string,
    @Body() body: { name: string },
  ): Promise<any> {
    return await this.sandboxService.func1();
  }
}
