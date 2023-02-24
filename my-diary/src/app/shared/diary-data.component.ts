import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiaryEntry } from './diary-entry.model';

@Injectable({ providedIn: 'root' })
export class DiaryDataService {
  constructor(private http: HttpClient) {}

  diarySubject = new Subject<DiaryEntry[]>();

  diaryEntries: DiaryEntry[] = [];

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(dairyEntry: DiaryEntry) {
    this.diaryEntries.push(dairyEntry);
    this.diarySubject.next(this.diaryEntries);
  }

  getDiaryEntries() {
    this.http
      .get<{diaryEntries: DiaryEntry[]}>(
        'https://3000-bravo1b9-ammeantutorial-cyxbsbperhf.ws-eu87.gitpod.io/diary-entries'
      )
      .subscribe((jsonData) => {
        this.diaryEntries = jsonData.diaryEntries;
        this.diarySubject.next(this.diaryEntries);
      });
  }

  getDiaryEntry(index: number) {
    return { ...this.diaryEntries[index] };
  }

  onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
    this.diaryEntries[paramId] = newEntry;
    this.diarySubject.next(this.diaryEntries);
  }
}
