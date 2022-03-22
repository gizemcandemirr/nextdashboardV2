import { useMemo } from "react";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
};

type ItemInfo = {
  value: number | string;
  active?: boolean;
  disabled?: boolean;
  action?: () => void;
};

export const usePagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const maxPage = Math.max(1, Math.ceil(totalCount / pageSize));

  const items = useMemo(() => {
    const _items: ItemInfo[] = [{ value: currentPage, active: true }];
    for (let i = 1; i <= siblingCount; i++) {
      if (currentPage - i >= 1) {
        _items.unshift({
          value: currentPage - i,
          action: () => onPageChange(currentPage - i),
        });
      }
      if (currentPage + i <= maxPage) {
        _items.push({
          value: currentPage + i,
          action: () => onPageChange(currentPage + i),
        });
      }
    }
    if (_items[0].value > 2) {
      _items.unshift({ value: "...", disabled: true });
    }
    
    if (_items[0].value > 1) {
      _items.unshift({ value: 1, action: () => onPageChange(1) });
    }
    
    if (_items[_items.length - 1].value < maxPage - 1) {
      _items.push({ value: "...", disabled: true });
    }
    
    if (_items[_items.length - 1].value < maxPage) {
      _items.push({ value: maxPage, action: () => onPageChange(maxPage) });
    }
    return _items;
  }, [currentPage, maxPage, onPageChange, siblingCount]);

  return { 
    items,
    // any helper functions you want
  }
};