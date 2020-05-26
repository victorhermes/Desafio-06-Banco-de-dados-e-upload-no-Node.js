import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const deleteTransaction = getCustomRepository(TransactionRepository);

    const transaction = await deleteTransaction.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction não existe');
    }

    await deleteTransaction.remove(transaction);
  }
}

export default DeleteTransactionService;
