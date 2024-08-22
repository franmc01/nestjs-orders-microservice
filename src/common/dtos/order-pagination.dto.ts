import { IsOptional, IsEnum } from 'class-validator';
import { OrderStatus } from '@prisma/client';
import { PaginationDto } from './pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Order status invalid, should be ${OrderStatus.PENDING}, ${OrderStatus.CANCELLED} or ${OrderStatus.DELIVERED}`,
  })
  status?: OrderStatus;
}
