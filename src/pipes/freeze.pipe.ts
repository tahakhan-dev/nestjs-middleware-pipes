import { ArgumentMetadata, Injectable, Logger, PipeTransform } from '@nestjs/common';

@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(FreezePipe.name);

  transform(value: any,metadata: ArgumentMetadata) {
    // metadata: ArgumentMetadata -->  type was passing to it ether be of tyoe body parameter or query parameter 
    this.logger.debug('FreezePipe running...');
    this.logger.debug(metadata.data);
    this.logger.debug(metadata.type);
    this.logger.debug(metadata.metatype);
    
    // Object.freeze(value);
    return value;
  }
}
